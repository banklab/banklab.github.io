<script lang="ts">
  import { fade, scale } from 'svelte/transition';

  let { show = false, onclose, children } = $props();

  function close() {
    onclose?.();
  }
</script>

{#if show}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-backdrop" onclick={close} transition:fade={{ duration: 200 }}>
    <div class="modal-content" onclick={(e) => e.stopPropagation()} transition:scale={{ duration: 200, start: 0.95 }}>
      <button class="close-button" onclick={close} aria-label="Close modal">&times;</button>
      <div class="modal-body">
        {@render children?.()}
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    width: 90%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #666;
  }
  .close-button:hover {
    color: #000;
  }
</style>
