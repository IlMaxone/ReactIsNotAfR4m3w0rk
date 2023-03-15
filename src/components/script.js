var Script = function () {
    (function () {
        var inputs = document.querySelectorAll('.controls input');
        inputs.forEach(function (input) { return input.addEventListener('change', handleUpdate); });
        inputs.forEach(function (input) { return input.addEventListener('mousemove', handleUpdate); });
        function handleUpdate() {
            var suffix = this.dataset.sizing || '';
            document.documentElement.style.setProperty("--".concat(this.id), this.value + suffix);
        }
    })();
};
export default Script;
