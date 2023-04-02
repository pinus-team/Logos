function updateModal(addonId, foodId, addonName, addonPrice) {
	let addon = document.querySelector(`#addon_${foodId}_${addonId}`);
	let modal = document.querySelector(`#modal_${foodId}`);
	if (addon.classList.contains("btn-inactive")) {
		addon.classList.remove("btn-inactive");
		addon.classList.add("btn-active");
	} else if (addon.classList.contains("btn-active")) {
		addon.classList.remove("btn-active");
		addon.classList.add("btn-inactive");
	}
	let modal_list = modal.querySelector(".addon-box");
	let modal_addon = modal_list.querySelector(
		`#modal_addon_${foodId}_${addonId}`
	);
	let modal_price = modal.querySelector(".price");
	if (modal_addon) {
		modal_list.removeChild(modal_addon);
		let price = parseFloat(modal_price.innerHTML);
		price -= parseFloat(addonPrice);
		modal_price.innerHTML = `${price.toFixed(2)}`;
		calculatePrice(foodId);
	} else {
		let new_addon = document.createElement("div");
		new_addon.classList.add(
			"flex",
			"justify-between",
			"items-center",
			"flex-row",
			"gap-4"
		);
		new_addon.id = `modal_addon_${foodId}_${addonId}`;
		let new_addon_name = document.createElement("p");
		new_addon_name.classList.add(
			"text-xs",
			"lg:text-base",
			"truncate",
			"indent-8"
		);
		new_addon_name.innerHTML = addonName;
		let new_addon_price = document.createElement("p");
		new_addon_price.classList.add("text-xs", "lg:text-base");
		new_addon_price.innerHTML = `$${addonPrice}`;
		let new_addon_hidden = document.createElement("input");
		new_addon_hidden.type = "hidden";
		new_addon_hidden.name = "addons[]";
		new_addon_hidden.value = addonId;
		new_addon.appendChild(new_addon_name);
		new_addon.appendChild(new_addon_price);
		new_addon.appendChild(new_addon_hidden);
		modal_list.appendChild(new_addon);
		let price = parseFloat(modal_price.innerHTML);
		price += parseFloat(addonPrice);
		modal_price.innerHTML = `${price.toFixed(2)}`;
		calculatePrice(foodId);
	}
}

function calculatePrice(foodId) {
	let modal = document.querySelector(`#modal_${foodId}`);
	let modal_price = modal.querySelector(".price");
	let total_price = modal.querySelector(".total-price");
	let quantity = modal.querySelector("input[type='number']").value;
	let price = parseFloat(modal_price.innerHTML);
	total_price.innerHTML = `${(price * quantity).toFixed(2)}`;
}

function changeInput(btn, amount, foodId) {
	let input = btn.parentElement.querySelector("input");
	let value = parseInt(input.value);
	value += amount;
	if (value < 1) {
		value = 1;
	}
	input.value = value;
	calculatePrice(foodId);
}
