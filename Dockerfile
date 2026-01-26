# Build Stage
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package manager files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the SvelteKit application
# Ensure your build script is named 'build' in package.json
RUN pnpm run build

# Production Stage
FROM node:20-alpine

WORKDIR /app

# Install pnpm (needed to install production dependencies)
RUN npm install -g pnpm

# Copy built server files from the build stage
# adapter-node outputs to 'build' directory by default
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Install production dependencies
# Only installs packages listed in 'dependencies' in package.json
RUN pnpm install --prod --frozen-lockfile

# Set environment variables (optional, but good practice)
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
# adapter-node creates an index.js entrypoint in the build directory
CMD ["node", "build/index.js"]
