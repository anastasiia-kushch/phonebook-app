import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch();
    actions.resetForm(handleSubmit);
  };

  return (
    <Formik onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="email">Email</label>
        <Field name="email"></Field>
        <label htmlFor="password">Email</label>
        <Field name="password"></Field>
      </Form>
    </Formik>
  );
}
