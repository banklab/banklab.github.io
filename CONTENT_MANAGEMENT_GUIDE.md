# Content Management Guide for the Bank Lab Website

This guide provides a comprehensive overview of how to manage the content of the new Bank Lab website. The new website is built with modern web technologies (SvelteKit and Tailwind CSS) and uses a straightforward, Git-based approach for content updates.

## 1. Introduction to the New Workflow

Previously, the website was updated by directly modifying files in the GitHub repository, which triggered a rebuild of the site on GitHub Pages. We have preserved this simple and effective workflow.

The core principle remains the same: **all website content is stored in files within the project's GitHub repository.** To add, edit, or delete content, you will modify these files directly through the GitHub web interface.

The key difference is the underlying technology and file structure. Instead of the old Jekyll structure, we now use a SvelteKit project. While the technology has changed, your workflow for editing content will be very similar.

### The Automated Build Process

Every time a change is pushed to the `main` branch of the repository, a GitHub Action will automatically:
1.  **Build the Website:** It will generate all the necessary static HTML, CSS, and JavaScript files for the website.
2.  **Deploy to GitHub Pages:** It will push these generated files to the `gh-pages` branch, making the changes live on the website.

You do not need to do anything to trigger this process; it is entirely automatic. You only need to make your content changes and save them. The website will typically be updated within 2-5 minutes.

## 2. How to Edit Website Content

All content for the website will be stored as Markdown (`.md`) files in the `src/lib/content` directory (this directory will be created). Each section of the website (e.g., People, Research, Publications) will have its own file or folder.

### Step-by-Step Guide to Editing a Page:

1.  **Navigate to the GitHub Repository:** Open your web browser and go to the project's GitHub repository: [https://github.com/banklab/banklab.github.io](https://github.com/banklab/banklab.github.io)

2.  **Locate the Content File:**
    *   Navigate into the `src/lib/content/` directory.
    *   Find the Markdown file (`.md`) corresponding to the page you wish to edit. For example, to edit the "People" page, you would look for a file named `people.md`.

3.  **Edit the File:**
    *   Click on the file to open it.
    *   Click the **pencil icon** (Edit this file) in the top-right corner of the file view.
    *   Make your desired changes to the text. The content is written in Markdown, a simple-to-use syntax for formatting text.

4.  **Save Your Changes (Commit):**
    *   Once you are finished editing, scroll to the bottom of the page to find the **"Commit changes"** box.
    *   In the first input box, provide a short, descriptive message about the change you made (e.g., "Updated contact email" or "Corrected typo on homepage").
    *   Ensure that **"Commit directly to the `main` branch"** is selected.
    *   Click the green **"Commit changes"** button.

That's it! The automated process will now take over and publish your changes to the live website.

## 3. How to Add New Content

The process for adding new content items, such as a new team member or a new publication, will follow a similar process of editing files. The exact structure will depend on how the data is stored.

### Example: Adding a New Team Member

Let's assume the team members are listed in a file at `src/lib/content/people.md`. The file might contain a list of members formatted in a specific way (e.g., using YAML Front Matter or a specific Markdown structure).

1.  **Navigate to and edit the `people.md` file** as described above.
2.  **Copy an existing entry** to ensure you match the format exactly.
3.  **Paste the copied block** at a suitable position in the list.
4.  **Update the content** of the new block with the information for the new team member (e.g., name, title, photo path).
5.  **Commit your changes** with a descriptive message like "Added Jane Doe to team."

**Important:** Maintaining the correct format is crucial. Always copy and paste an existing item to ensure consistency.

## 4. Working with Images and Files

### Adding New Images (e.g., Team Member Photos):

1.  **Navigate to the `static/assets/img/` directory** in the GitHub repository. There may be sub-folders (like `team/`). Please use the appropriate sub-folder.
2.  Click the **"Add file"** button and select **"Upload files"**.
3.  Drag and drop your new image into the uploader.
4.  **Commit the file** with a message like "Added photo for Jane Doe."
5.  **Reference the new image:** When you edit the content file (e.g., `people.md`), you will reference this image by its path, for example: `/assets/img/team/jane-doe.jpg`.

### Adding New Documents for Download:

1.  **Navigate to the `static/assets/download/` directory.**
2.  **Upload the file** as you would an image.
3.  **Reference the document** in your content files with its path, e.g., `/assets/download/my-new-paper.pdf`.

By following these procedures, you can easily and efficiently manage the website's content without needing to understand the underlying code. The workflow is designed to be robust, transparent, and user-friendly.