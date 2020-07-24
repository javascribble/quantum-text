export default `
<style>
    input {
        border: solid black 1px;
        padding: var(--padding);
    }

    input {
        font-size: var(--font-size, inherit);
        color: var(--color, inherit);
        border-radius: var(--border-radius, 3px);
    }

    input:focus {
        border-color: var(--focus-color);
    }

    input:invalid {
        border-color: var(--invalid-color);
    }

    input:disabled {
        border-color: var(--disabled-color);
    }
</style>
`;