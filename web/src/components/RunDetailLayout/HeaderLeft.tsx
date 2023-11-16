import {LinkOutlined} from '@ant-design/icons';
import {useDashboard} from 'providers/Dashboard/Dashboard.provider';
import {useTest} from 'providers/Test/Test.provider';
import {useTestRun} from 'providers/TestRun/TestRun.provider';
import {useMemo} from 'react';
import Date from 'utils/Date';
import {isRunStateFinished} from 'models/TestRun.model';
import { TDraftTest } from 'types/Test.types';
import TestService from 'services/Test.service';
import HeaderForm from './HeaderForm';
import Info from './Info';
import * as S from './RunDetailLayout.styled';

interface IProps {
  name: string;
  triggerType: string;
  origin: string;
}

const HeaderLeft = ({name, triggerType, origin}: IProps) => {
  const {run: {createdAt, testSuiteId, testSuiteRunId, executionTime, trace, traceId, testVersion} = {}, run} =
    useTestRun();
  const {onEdit, isEditLoading: isLoading, test} = useTest();
  const createdTimeAgo = Date.getTimeAgo(createdAt ?? '');
  const {navigate} = useDashboard();
  const stateIsFinished = isRunStateFinished(run.state);

  const handleOnEdit = (draft: TDraftTest) => {
    const update = TestService.getInitialValues(test);
    onEdit({...update, ...draft});
  };

  const description = useMemo(() => {
    return (
      <>
        v{testVersion} • {triggerType} • Ran {createdTimeAgo}
        {testSuiteId && testSuiteRunId && (
          <>
            {' '}
            •{' '}
            <S.TransactionLink to={`/testsuite/${testSuiteId}/run/${testSuiteRunId}`} target="_blank">
              Part of test suite <LinkOutlined />
            </S.TransactionLink>
          </>
        )}
      </>
    );
  }, [triggerType, createdTimeAgo, testSuiteId, testSuiteRunId, testVersion]);

  return (
    <S.Section $justifyContent="flex-start">
      <a data-cy="test-header-back-button" onClick={() => navigate(origin)}>
        <S.BackIcon />
      </a>
      <S.InfoContainer>
        <S.Row>
          <HeaderForm
            name={name}
            onSubmit={handleOnEdit}
            isDisabled={isLoading || !stateIsFinished}
          />
          <Info
            date={createdAt ?? ''}
            executionTime={executionTime ?? 0}
            state={run.state}
            totalSpans={trace?.spans?.length ?? 0}
            traceId={traceId ?? ''}
          />
        </S.Row>
        <S.Text>{description}</S.Text>
      </S.InfoContainer>
    </S.Section>
  );
};

export default HeaderLeft;
