import {render, screen, fireEvent} from '@testing-library/react';
import {Formik} from 'formik';
import SignInForm from './SignIn/SignInForm';

const credentials = {
    username: 'user111',
    password: 'password'
};

describe('SignInF', () => {
    describe('SignInForm', () => {
        it('calls onSubmit with correct arguments when a valid form is submitted', () => {
            const onSubmit = jest.fn();
            render(<Formik initialValues={{username: '', password: ''}} onSubmit={onSubmit}>
                {({handleSubmit}) => <SignInForm onSubmit={handleSubmit}/>}
            </Formik>);

            fireEvent.changeText(screen.getByTestId('username'), credentials.username);
            fireEvent.changeText(screen.getByTestId('password'), credentials.password);
            fireEvent.press(screen.getByText('Sign in'));

            expect(onSubmit).toHaveBeenCalledTimes(1);
            expect(onSubmit.mock.calls[0][0]).toEqual(credentials);
        });
    });

});