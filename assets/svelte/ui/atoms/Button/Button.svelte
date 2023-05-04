<script lang="ts">
  export let color: 'white' | 'primary' | 'warning' | 'danger' = undefined;
  export let disabled: boolean = false;
  export let type: 'button' | 'submit' = 'button';

  const classes = ['button'];
  if (color) {
      classes.push(`is-${color}`);
  }
</script>

<!-- Wrapper is needed here to work fine with Field component. -->
<div class="control">
  <button
    class={classes.join(' ')}
    on:click
    {type}
    {disabled}
    {...$$restProps}
  >
    <slot />
  </button>
</div>

