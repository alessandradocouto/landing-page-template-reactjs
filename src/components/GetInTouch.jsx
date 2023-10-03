import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'Precisa de ajuda? Ficamos felizes em te ouvir!'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'It is our commitment to ensure a professional and enjoyable \
                new home buying experience for you. \
                If you want to get a home to start living as a family in an \
                area that you love click the button below.'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 2,
                        color: 'gray',
                        backgroundColor: 'transparent',
                        borderColor: 'gray',
                        "&&:hover": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        },
                        "&&:focus": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        }
                    }}
            >
                Fale conosco
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;