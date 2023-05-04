<script lang="ts">
    import { Meta, Story } from '@storybook/addon-svelte-csf';
    import Button from './Button.svelte';

    const argTypes = {
        color: {
            control: { type: 'select' },
            options: [
                'white',
                'primary',
                'warning',
                'danger',
            ],
        },
        'on:click': { action: 'click', description: 'event' },
    };

    let count = 0;
    function handleClick() {
        count += 1;
    }
</script>

<Meta
    title="Atoms/Button"
    component={Button}
    {argTypes}
    parameters={{
        previewTabs: {
            canvas: { hidden: true },
        },
        viewMode: 'docs',
    }}
/>

<Story name="Button" let:args>
    <Button on:click={handleClick} {...args}>
        Count: {count}
    </Button>
</Story>

<Story
    name="Colors"
    parameters={{
        docs: {
            description: {
                story: `Use these variants depending on the context. Default button is your go-to when building a view,
                    use it if you're unsure about context, hierarchy or until a detailed mockup has been provided.
                    Primary is intended for actions like Submit, Save and Confirm. Light is used as the additional
                    action to primary (if needed), for example Cancel or Back. Text is used for buttons that are
                    links, i.e. takes the user to another view. Success is an alternative to primary, often used
                    as the last action button after a multi-step process. Warning and Danger are for when the user
                    confirms a potentially dangerous action. However, consider using the default button instead
                    with an icon in the Warning or Danger color.`,
            },
        },
    }}
>
    <p class="buttons">
        <Button>Button</Button>
        <Button color="primary">Primary</Button>
        <Button color="warning">Warning</Button>
        <Button color="white">White</Button>
    </p>
</Story>
