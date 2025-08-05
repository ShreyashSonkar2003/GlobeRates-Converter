## 🌍 Currency Converter – Real-Time Exchange Rate App

Welcome to my **Currency Converter** web application! 💱
A sleek, responsive, and interactive currency conversion tool that fetches real-time exchange rates using the **Frankfurter API**, complete with **dynamic flags**, **smooth UI**, and **mobile-first design**.

### 🔗 [🚀 Live Demo](https://globeratesconverter.netlify.app/)


## 🧰 Tech Stack

| Technology               | Purpose                      |
| ------------------------ | ---------------------------- |
| **HTML5**                | Page structure and layout    |
| **CSS3**                 | Styling, responsive design   |
| **JavaScript (Vanilla)** | Logic, DOM, API integration  |
| **Frankfurter API**      | Real-time exchange rates     |
| **Flags API**            | Dynamic country flag display |


## 📁 Project Structure

```
currency-converter/
├── index.html        # Main webpage
├── styles.css        # Styling and layout
├── scripts.js        # Currency logic, API, flags
├── codes.js          # countryList object for flags
```


## ✨ Core Features

### 🔹 Currency Dropdowns with Auto-Flags

* Built dynamically from a `countryList` object
* On selection, the appropriate country flag updates instantly

### 🔹 Real-Time Currency Conversion

* Fetches exchange rates using:

  ```js
  fetch(`${API_URL}?from=${fromCurrency}&to=${toCurrency}`)
  ```
* Handles same-currency conversion and invalid/empty input

### 🔹 Input Validation

* Ensures valid number and sets default value if invalid:

  ```js
  if (isNaN(amount) || amount < 1) amount = 1;
  ```

### 🔹 Responsive UI/UX

* Modern neumorphic input boxes
* Gradient background
* Mobile-friendly with media queries
* Intuitive dropdowns and button interactions

## 🚀 Unique Features

| Feature                     | Description                                          |
| --------------------------- | ---------------------------------------------------- |
| 🌐 **Live API Integration** | Reliable real-time currency data from Frankfurter    |
| 🏳️ **Auto Flag Update**    | Country flags change dynamically based on selection  |
| 🎨 **Clean, Modern UI**     | Smooth styling, shadows, gradients, and neumorphism  |
| 📱 **Responsive Design**    | Optimized for mobile, tablet, and desktop            |
| 🔄 **Default Selection**    | USD → INR pre-selected for quick use                 |
| ⚠️ **Error Handling**       | API errors are gracefully handled with user feedback |


## 🧠 Challenges Solved

* Handled asynchronous API fetching with proper error handling
* Mapped currency codes to country flags dynamically
* Built dropdowns from JavaScript, not hardcoded in HTML
* Achieved full responsiveness without any CSS framework


## 💬 How It Works

1. On load, default conversion (`USD → INR`) is shown
2. User can input an amount and choose two currencies
3. Clicking **“Get Exchange Rate”** triggers:

   * Input validation
   * API call for real-time rates
   * Live result rendering
4. Country flags change as per selected currencies


## 📬 Contact Me

Feel free to reach out for collaboration, feedback, or questions:

📧 Email: [shreyashsonkar123k@gmail.com](mailto:shreyashsonkar123k@gmail.com)
💼 LinkedIn: [linkedin.com/in/shreyash-sonkar19](https://www.linkedin.com/in/shreyash-sonkar19/)
🐱 GitHub: [github.com/ShreyashSonkar2003](https://github.com/ShreyashSonkar2003)



