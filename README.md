# React Form with Validation 🚀

Welcome to the React Form with Validation project! This project demonstrates how to create a robust form in React with validation for required fields, display error messages, and disable form submission until all fields are correctly filled. Upon successful submission, the details are displayed on a new route. This project does not rely on any third-party libraries for validation, making it a perfect learning resource for understanding basic form handling in React.

## Features ✨
- **Field Validation**: Ensures that all required fields are filled out correctly.
- **Error Messages**: Provides user-friendly error messages for incomplete or incorrect fields.
- **Show/Hide Password**: Toggle visibility of the password field.
- **Dynamic Dropdowns**: Country and city dropdowns to select geographical locations.
- **Submission Control**: Disables the submit button until all fields are correctly filled.
- **Data Display**: Shows all entered details on a new route after successful submission.

### Required Fields 📝
- First Name
- Last Name
- Username
- Email
- Password
- Phone Number (with country code)
- Country (dropdown)
- City (dropdown)
- PAN Number
- Aadhar Number

## Getting Started 🚀

### Prerequisites 📋
- Node.js installed on your machine

### Installation 🛠️
1. **Clone the repository**
   ```bash
   git clone https://github.com/teerthesh706/React-Form-Validation.git
2. **Navigate to the project directory**
   ```bash
   cd react-form-validation   
3. **Install the dependencies**
   ```bash
   npm install
## Running the Project ▶️

1. **Start the development server**
   ```bash
   npm start
2. **Open your browser and navigate to**
   ```bash
   http://localhost:3000
You should now see the form ready to be filled out. 🎉


# Project Structure 📂
- `src/components/`: Contains React components for the form and routes.
  - `FormComponent.jsx`: The main form component.
  - `SuccessComponent.jsx`: Component to display after successful form submission.
- `src/App.jsx`: Main application component with routing logic.
- `src/App.css`: Basic styling for the form.

## Form Validation Logic 🔍
- **Required Fields**: Each field has a validation check to ensure it is not empty.
- **Email Validation**: Checks if the email entered is in a valid format.
- **Phone Number Validation**: Ensures the phone number is entered along with the country code.
- **Dropdown Selection**: Ensures a country and city are selected from the dropdowns.
- **PAN and Aadhar Number Validation**: Basic checks for proper formats.

## Form Submission 📨
- The submit button is disabled until all fields are valid.
- On successful submission, the data is displayed on a new route `/success`.

## How to Contribute 🤝
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.


## Contact 📬
If you have any questions or suggestions, feel free to reach out!
#

 ### Enjoy building with React! 💻🚀


 ### ***Happy Coding! 😊👨‍💻***