function updateState(node, id, value) {
	const div = document.querySelector(`#${id}`);
	const input = div.querySelector("input[type=hidden]");
	input.value = value;
	div.querySelectorAll("button").forEach((btn_sib) => {
		btn_sib.classList.remove("btn-bag-active");
		btn_sib.classList.add("btn-bag-inactive");
	});
	node.classList.remove("btn-bag-inactive");
	node.classList.add("btn-bag-active");
	pollInputs();
}

function pollInputs() {
	const inputs = document.querySelectorAll("#orderForm input[type=hidden]");
    let valid = true;
    inputs.forEach((input) => {
        if (input.value === "") {
            valid = false;
        }
    });
	if (valid) {
		document.querySelector("#submitBtn").disabled = false;
	}
}
