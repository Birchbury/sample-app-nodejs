import { Box, Flex, H1, Panel } from '@bigcommerce/big-design';
import styled from 'styled-components';
// import ErrorMessage from '../components/error';
// import Loading from '../components/loading';
// import { useProducts } from '../lib/hooks';

const Index = () => {
    // const { error, isLoading, summary } = useProducts();
    //
    // if (isLoading) return <Loading />;
    // if (error) return <ErrorMessage error={error} />;

    return (
        <Panel>
            <Flex>
                <StyledBox border="box" borderRadius="normal" marginRight="xLarge" padding="medium">
                    <H1 marginBottom="none">Hello World</H1>
                </StyledBox>
            </Flex>
        </Panel>
    );
};

const StyledBox = styled(Box)`
    min-width: 10rem;
`;

export default Index;
