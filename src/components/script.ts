const Script = () => {
    (function () {
        const inputs = document.querySelectorAll('.controls input') as NodeListOf<HTMLElement>;
        
        inputs.forEach(input => input.addEventListener('change', handleUpdate));    
        inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
        
        function handleUpdate(this: HTMLInputElement): void{
            const suffix = this.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
        }
    })()
}

export default Script;