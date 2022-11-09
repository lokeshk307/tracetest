import {Button, Form} from 'antd';
import {useCallback, useState} from 'react';
import {TDraftTransaction, TTransaction} from 'types/Transaction.types';
import {useTransaction} from 'providers/Transaction/Transaction.provider';
import useValidateTransactionDraft from 'hooks/useValidateTransactionDraft';

import * as S from './EditTransaction.styled';
import EditTransactionForm from '../EditTransactionForm';

interface IProps {
  transaction: TTransaction;
}

const EditTransaction = ({transaction}: IProps) => {
  const [form] = Form.useForm<TDraftTransaction>();
  const {onEdit, isEditLoading} = useTransaction();
  const [isFormValid, setIsFormValid] = useState(true);

  const onChange = useValidateTransactionDraft({setIsValid: setIsFormValid});

  const handleOnSubmit = useCallback(
    async (values: TDraftTransaction) => {
      onEdit(values);
    },
    [onEdit]
  );

  return (
    <S.Wrapper data-cy="edit-transaction-form">
      <S.FormContainer>
        <S.Title>Edit Transaction</S.Title>
        <EditTransactionForm form={form} transaction={transaction} onSubmit={handleOnSubmit} onValidation={onChange} />
        <S.ButtonsContainer>
          <Button data-cy="edit-transaction-reset" onClick={() => form.resetFields()}>
            Reset
          </Button>
          <Button
            data-cy="edit-transaction-submit"
            loading={isEditLoading}
            disabled={!isFormValid}
            type="primary"
            onClick={() => form.submit()}
          >
            Save & Run
          </Button>
        </S.ButtonsContainer>
      </S.FormContainer>
    </S.Wrapper>
  );
};

export default EditTransaction;