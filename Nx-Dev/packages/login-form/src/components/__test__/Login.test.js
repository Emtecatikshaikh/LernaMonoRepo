import {fireEvent, render,screen} from "@testing-library/react";
import Login,{validateEmail} from'../Login';
import userEvent from "@testing-library/user-event"

describe("Testing the Login Component",() => {
    
    test("Render the login form with 2 buttons",async () => {
        render(<Login />);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(2);
    })

    test("Should be failed on email validation",() => {
        const testEmail = "atik@shaikh.com";
        expect(validateEmail(testEmail)).toBe(true);
    })

    test("Email Input should accept only email", () => {
        render(<Login />);
        const email = screen.getByPlaceholderText("Enter email");
        userEvent.type(email,"atikshaikh@gmail.com");
        expect(email.value).toMatch("atikshaikh@gmail.com");
    })

    test("Password input should have type as password", () => {
        render(<Login />)
        const password = screen.getByPlaceholderText("Password");
        userEvent.type(password,"1234567");
        expect(password).toHaveAttribute("type","password");
    })

    test("should be able to reset the form",() => {
        const {  getByTestId} = render(<Login />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const resetBtn = getByTestId("reset");
        const emailNode = screen.getByPlaceholderText("Enter email");
        const passNode = screen.getByPlaceholderText("Password");

        fireEvent.click(resetBtn);
        expect(emailNode.value).toMatch("");
        expect(passNode.value).toMatch("");
    })

    test("should be able to submit the form",() => {
        render(<Login />)
        const submitBtn = screen.getByTestId("submit");
        const emailNode = screen.getByPlaceholderText("Enter email");
        const passNode = screen.getByPlaceholderText("Password");

        userEvent.type(emailNode,"atik@gmail.com");
        userEvent.type(passNode,"1234567");

        userEvent.click(submitBtn);

        const userInfo = screen.getByText("atik@gmail.com")
        expect(userInfo).toBeInTheDocument();
    })

    test("should display error if incorrect email address",() => {
        render(<Login />)
        const submitBtn = screen.getByTestId("submit");
        const emailNode = screen.getByPlaceholderText("Enter email");
        const passNode = screen.getByPlaceholderText("Password");

        userEvent.type(emailNode,"atik");
        userEvent.type(passNode,"1234567");

        userEvent.click(submitBtn);

        const errorInfo = screen.getByText("Email is not valid")
        expect(errorInfo).toBeInTheDocument();
    })

})