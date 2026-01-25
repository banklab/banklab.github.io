<script lang="ts">
  export let title: string;
</script>

<div class="bg-[var(--color-accent-green)] p-8 rounded-lg text-[var(--color-text-main)] h-full">
  <div class="mb-4">
    <slot name="icon" />
  </div>
  <h3 class="font-bold text-xl mb-3 font-serif">{title}</h3>
  <div class="text-sm leading-relaxed">
    <slot />
  </div>
</div>
