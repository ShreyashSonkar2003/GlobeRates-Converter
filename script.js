const API_URL = "https://api.frankfurter.app/latest";

const currencyDropdowns = document.querySelectorAll(".dropdown select");
const convertButton = document.querySelector("form button");
const fromCurrencyDropdown = document.querySelector(".from select");
const toCurrencyDropdown = document.querySelector(".to select");
const resultBox = document.querySelector(".msg");

for (let dropdown of currencyDropdowns) {
    for (let currencyCode in countryList) {
        const optionTag = document.createElement("option");
        optionTag.innerText = currencyCode;
        optionTag.value = currencyCode;

        if (dropdown.name === "from" && currencyCode === "USD") {
            optionTag.selected = true;
        } else if (dropdown.name === "to" && currencyCode === "INR") {
            optionTag.selected = true;
        }

        dropdown.append(optionTag);
    }

    dropdown.addEventListener("change", (event) => {
        updateFlagIcon(event.target);
    });
}

const updateFlagIcon = (dropdownElement) => {
    const selectedCurrency = dropdownElement.value;
    const countryCode = countryList[selectedCurrency];
    if (countryCode) {
        const flagImg = dropdownElement.parentElement.querySelector("img");
        flagImg.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    }
};

const fetchExchangeRate = async () => {
    const amountInput = document.querySelector(".amount input");
    let amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount < 1) {
        amount = 1;
        amountInput.value = "1";
    }

    const fromCurrency = fromCurrencyDropdown.value;
    const toCurrency = toCurrencyDropdown.value;

    if (fromCurrency === toCurrency) {
        resultBox.innerText = `${amount} ${fromCurrency} = ${amount} ${toCurrency}`;
        return;
    }

    try {
        const response = await fetch(`${API_URL}?from=${fromCurrency}&to=${toCurrency}`);
        const data = await response.json();

        if (!data.rates || !data.rates[toCurrency]) {
            throw new Error("Currency not supported by API.");
        }

        const rate = data.rates[toCurrency];
        const converted = (amount * rate).toFixed(2);
        resultBox.innerText = `${amount} ${fromCurrency} = ${converted} ${toCurrency}`;
    } catch (error) {
        console.error("API error:", error);
        resultBox.innerText = "Error: Could not fetch exchange rate.";
    }
};

convertButton.addEventListener("click", (event) => {
    event.preventDefault();
    fetchExchangeRate();
});

window.addEventListener("load", () => {
    fetchExchangeRate();
});
