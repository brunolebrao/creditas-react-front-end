import React from 'react';
import { Formik, Field } from 'formik';

/** STYLES */
import { Container } from './styles';

/** TEXTS */
import { texts } from '../../assets/texts';

/** COMPONENTS */
import { InputText } from '../../components/InputText';
import { SelectText } from '../../components/SelectText';
import { InputRange } from '../../components/InputRange';

/** MOCKS */
import { installments, warranties } from '../../utils/mock';
import { InstallmentValue } from '../../components/InstallmentValue';

const Home = () => (
  <Container>
    <header>
      <h1>
        <strong>{texts.bodyTitle}</strong>
      </h1>
    </header>
    <Formik
      initialValues={{
        installment: '',
        warranty: '',
        warrantyValue: '',
        loanAmount: '',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <main>
            <section>
              <Field
                id="installment"
                name="installment"
                options={installments}
                label={texts.installment}
                component={SelectText}
              />
              <Field
                id="warranty"
                name="warranty"
                options={warranties}
                label={texts.warranty}
                component={SelectText}
              />
            </section>
            <section>
              <Field
                id="warrantyValue"
                label={texts.warrantyValue}
                name="warrantyValue"
                component={InputText}
                type="number"
              />
              <Field
                id="warrantyValue"
                name="warrantyValue"
                min={12000.0}
                max={24000.0}
                step={10}
                component={InputRange}
              />
            </section>
            <section>
              <Field
                id="loanAmount"
                label={texts.loanAmount}
                name="loanAmount"
                component={InputText}
                type="number"
              />
              <Field
                id="loanAmount"
                name="loanAmount"
                min={12000.0}
                max={24000.0}
                step={10}
                component={InputRange}
              />
            </section>
          </main>
          <main>
            <InstallmentValue />
          </main>
        </form>
      )}
    />
  </Container>
);

export default Home;
