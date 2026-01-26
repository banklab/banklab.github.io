<script lang="ts">
  import ContentCard from '$lib/components/layout/ContentCard.svelte';
  let { data } = $props();
</script>

<svelte:head>
  <title>Research | Bank Lab</title>
</svelte:head>

<ContentCard>
  {@html data.post.html}
</ContentCard>
