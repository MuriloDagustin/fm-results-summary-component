import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import data from './data/data.json';

function App() {
    return (
        <>
            <Container
                fluid={'md'}
                className='min-vh-100 d-flex flex-column p-0 p-md-3'
            >
                <Card className='w-100 p-0 border-0 shadow-md-lg d-flex flex-md-row mx-md-auto my-md-auto main-card'>
                    <div className='col-12 col-md-6'>
                        <Card
                            bg='purple'
                            className='w-100 h-100 rounded-top-sm-0 rounded-5 d-flex justify-content-between align-items-center flex-column text-white text-center row-gap-3 row-gap-md-0 p-4'
                        >
                            <h5 className='m-0 text-white-50'>Your Result</h5>

                            <div className='d-flex justify-content-center align-items-center flex-column p-3 rounded-circle result'>
                                <h1 className='fw-bold m-0'>75</h1>
                                <span className='text-white-50'>of 100</span>
                            </div>

                            <h1 className='m-0'>Great</h1>

                            <span className='text-white-50'>
                                You scored higher than 65% of the people who
                                have taken these tests.
                            </span>
                        </Card>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-between align-items-center flex-column px-5 py-4 row-gap-4 row-gap-md-3 h-100'>
                            <h5 className='align-self-start align-self-md-center m-0'>
                                Summary
                            </h5>

                            {data.map((data) => {
                                return (
                                    <div
                                        key={crypto.randomUUID()}
                                        className='p-3 d-flex justify-content-start align-items-center column-gap-2 w-100 rounded'
                                        style={{
                                            backgroundColor: data.bgColor,
                                        }}
                                    >
                                        <img src={data.icon} alt='Ícone' />
                                        <span style={{ color: data.color }}>
                                            {data.category}
                                        </span>
                                        <span className='ms-auto'>
                                            {data.score}{' '}
                                            <span className='text-secondary'>
                                                / 100
                                            </span>
                                        </span>
                                    </div>
                                );
                            })}

                            <div className='d-grid gap-2 w-100'>
                                <button className='btn btn-continue rounded-pill btn-lg border-0 text-white'>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className='attribution mt-auto d-flex justify-content-center'>
                    <span className='text-center'>
                        Challenge by&nbsp;
                        <a
                            href='https://www.frontendmentor.io?ref=challenge'
                            target='_blank'
                        >
                            Frontend Mentor
                        </a>
                        . Coded by&nbsp;
                        <a href='https://github.com/MuriloDagustin'>
                            Murilo D'agustin
                        </a>
                        .
                    </span>
                </div>
        </Container>
        </>
    );
}

export default App;
