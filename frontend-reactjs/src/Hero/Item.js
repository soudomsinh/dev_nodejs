import { Paper, Button } from '@mui/material'

function Item({item})
{
    return (
        <Paper>
            <img src={item.image}  alt={item.title} style={{width:"100%", height:"100%"}}/>
            <div className='description' style={{display:"flex", justifyContent:"center"}}>
                  <h2>{item.title}</h2>
            </div>

            <Button variant='contained'>
                Check it out!
            </Button>
        </Paper>
    )
}

export default Item