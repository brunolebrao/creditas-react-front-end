import React from 'react';
import { Formik, Field } from 'formik';
import { Grid } from 'semantic-ui-react';

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
          <Grid width={12} centered>
            <header>
              <h1>
                <strong>{texts.bodyTitle}</strong>
              </h1>
            </header>
          </Grid>
          <Grid columns={2} divided centered>
            <Grid.Row stretched>
              <Grid.Column width={5} textAlign="justified">
                <main>
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
                </main>
                <main>
                  <Field
                    id="warrantyValue"
                    label={texts.warrantyValue}
                    name="warrantyValue"
                    component={InputText}
                  />
                  <Field
                    id="warrantyValue"
                    name="warrantyValue"
                    min={12000.0}
                    max={24000.0}
                    step={10}
                    component={InputRange}
                  />
                </main>
                <main>
                  <Field
                    id="loanAmount"
                    label={texts.loanAmount}
                    name="loanAmount"
                    component={InputText}
                  />
                  <Field
                    id="loanAmount"
                    name="loanAmount"
                    min={12000.0}
                    max={24000.0}
                    step={10}
                    component={InputRange}
                  />
                </main>
              </Grid.Column>
              <Grid.Column width={3}>
                <InstallmentValue />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </form>
      )}
    />
  </Container>
);

export default Home;
