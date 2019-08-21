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

const Home = () => (
  <Container>
    <Grid centered>
      <h1>{texts.bodyTitle}</h1>
    </Grid>

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
      render={() => (
        <Grid columns={2} centered>
          <form>
            <Grid rows={3}>
              <Grid.Row>
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
              </Grid.Row>
              <Grid.Row>
                <Field
                  id="warrantyValue"
                  label={texts.warrantyValue}
                  name="warrantyValue"
                  component={InputText}
                />
                <Field
                  id="warrantyValue"
                  label={texts.warrantyValue}
                  min={12000.0}
                  max={24000.0}
                  step={10}
                  name="warrantyValue"
                  component={InputRange}
                />
              </Grid.Row>
              <Grid.Row>
                <Field
                  id="loanAmount"
                  label={texts.loanAmount}
                  name="loanAmount"
                  component={InputText}
                />
              </Grid.Row>
            </Grid>
          </form>
        </Grid>
      )}
    />
  </Container>
);

export default Home;
