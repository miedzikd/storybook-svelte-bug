<script lang="ts">
  export let color: 'white' | 'primary' | 'warning' | 'danger' = undefined;
  export let disabled: boolean = false;
  export let buttonElement: HTMLButtonElement = undefined;
  export let type: 'button' | 'submit' = 'button';

  const classes = ['button'];
  if (color) {
      classes.push(`is-${color}`);
  }
</script>

<!-- Wrapper is needed here to work fine with Field component. -->
<div class="control">
  <button
    bind:this={buttonElement}
    class={classes.join(' ')}
    on:click
    data-testid="button"
    {type}
    {disabled}
    {...$$restProps}
  >
    <slot />
  </button>
</div>

<style lang="scss">
  .button {
    :global(.icon:first-child:not(:last-child)) {
      margin-right: 0.45em;
    }
  }
</style>
