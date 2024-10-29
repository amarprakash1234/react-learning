import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1542669334-9f30f4af1266?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=TrdzfkrLvvrvp5CWEqh5C2DNS13jrgLo849g6T583So=";
    const COLD_URL = "https://media.istockphoto.com/id/1065457848/photo/happy-snowman-in-winter-secenery.webp?a=1&b=1&s=612x612&w=0&k=20&c=-v6B4hW7CT6Ij08QO6mMViPN3ffyDLgBcx04rLjM1Hg=";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

    return (
        <div className="InfoBox">
            <div className='CardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image={info.humidity > 80 ? RAIN_URL : info.temp > 16 ? HOT_URL : COLD_URL} title="green iguana"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 16 ? <WbSunnyIcon /> : <AcUnitIcon />}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}