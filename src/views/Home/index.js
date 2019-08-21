import React from 'react';
import { Formik, Field } from 'formik';
import { Grid } from 'semantic-ui-react';

/** STYLES */
import {
  Container, Title, BoxContainer, Box, BoxBody, BoxCenter,
} from './styles';

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
    <Title>{texts.bodyTitle}</Title>

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
        <form>
          <BoxContainer>
            <Box direction="column" justify="space-around">
              <BoxBody>
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
              </BoxBody>
              <BoxBody>
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
              </BoxBody>
              <BoxBody>
                <Field
                  id="loanAmount"
                  label={texts.loanAmount}
                  name="loanAmount"
                  component={InputText}
                />
                <BoxCenter>
                  <Field
                    id="loanAmount"
                    name="loanAmount"
                    min={12000.0}
                    max={24000.0}
                    step={10}
                    component={InputRange}
                  />
                </BoxCenter>
              </BoxBody>
            </Box>
            <Box>
              <InstallmentValue />
            </Box>
          </BoxContainer>
        </form>
      )}
    />
  </Container>
);

export default Home;
