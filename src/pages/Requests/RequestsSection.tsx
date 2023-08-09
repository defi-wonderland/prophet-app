import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import { Icon, SLink, Pill } from '~/components';
import { useStateContext } from '~/hooks';
import { RequestData } from '~/types';
import { fontSize, statusMsg, truncateString } from '~/utils';

interface RequestSectionProps {
  requests: RequestData[];
}

export const RequestSection = ({ requests }: RequestSectionProps) => {
  const { setSelectedRequest } = useStateContext();

  return (
    <RequestsSection>
      {!!requests.length &&
        requests.map((card, index) => (
          <Card key={card.id + index}>
            {/* Header section */}
            <PillsContainer>
              <Pill iconName='hashtag' size='1.2rem' text={truncateString(card.id, 9)} copy clickable />
              <Pill iconName={card.status} text={statusMsg(card.status)} size='1.3rem' />
            </PillsContainer>

            {/* Request number */}
            <RequestTitle>Request #{card.nonce}</RequestTitle>

            {/* Requester section */}
            <DataContainer>
              <SecondaryText>By</SecondaryText>
              <PrimaryText>{truncateString(card.requester, 4)}</PrimaryText>
            </DataContainer>

            {/* Description */}
            <DescriptionContainer>
              <SecondaryText>{card.description}</SecondaryText>
            </DescriptionContainer>

            {/* Footer section */}
            <CardFooter>
              <DataContainer>
                <PrimaryText>{card.createdAt}</PrimaryText>
              </DataContainer>
              <SLink to={`/requests/${card.id}`}>
                <DetailsButton onClick={() => setSelectedRequest(card)}>
                  <p>See details</p>
                  <Icon name='right-arrow' size='0.9rem' />
                </DetailsButton>
              </SLink>
            </CardFooter>
          </Card>
        ))}

      {!requests.length && (
        <>
          <CardSkeleton>
            <div>
              <Skeleton count={1} />
            </div>
            <div>
              <Skeleton count={1} width='70%' />
              <Skeleton count={1} width='50%' />
            </div>
            <div>
              <Skeleton count={1} height={60} />
              <Skeleton count={1} />
            </div>
          </CardSkeleton>
        </>
      )}
    </RequestsSection>
  );
};

const RequestsSection = styled.section`
  margin-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: start;
  align-items: start;
`;

const Card = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: ${({ theme }) => theme.border};
  width: 40.6rem;
  height: 21.2rem;
  gap: 1rem;
  padding: 2rem;
`;

const CardSkeleton = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DataContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: row;
  align-items: center;
  /* height: 3rem; */
`;

const DescriptionContainer = styled(DataContainer)`
  height: 4.8rem;
  align-items: start;
  margin: 1rem 0;

  p {
    font-size: ${fontSize.MEDIUM};
  }
`;

const PrimaryText = styled.p`
  color: ${({ theme }) => theme.textPrimary};
  text-align: right;
  font-family: 'Open Sans';
  font-size: ${fontSize.SMALL};
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 140% */
`;

export const SecondaryText = styled.p`
  display: inline-block;
  color: ${({ theme }) => theme.textSecondary};
  font-family: 'Open Sans';
  font-size: ${fontSize.SMALL};
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 140% */
`;

// ------------------------------- Header Section ------------------------------- //
const PillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
`;

// ------------------------------- Mid Section ------------------------------- //
const RequestTitle = styled.h1`
  color: ${({ theme }) => theme.textPrimary};
  font-family: 'Open Sans';
  font-size: ${fontSize.LARGE};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 1rem 0;
`;

// ------------------------------- Footer Section ------------------------------- //
const DetailsButton = styled.button`
  background-color: ${({ theme: { detailsBackground } }) => detailsBackground};
  color: ${({ theme }) => theme.textPrimary};
  display: flex;
  height: 24px;
  padding: 4px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  font-size: ${fontSize.SMALL};
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
