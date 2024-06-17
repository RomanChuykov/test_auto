
import { a} from './CarList.styled';
function CarList(car){
    function sityAndCountry() {
        const adres=car.address;
        const parts=adres.split(',');
        if (parts.length<3) {
            return{sity:null,country:null}
        }
        const sity=parts[parts.length-2].trim();
        const country=parts[parts.length-1].trim();
        return{sity,country}
    }
    const address=sityAndCountry();
    return(
        <>
            <img src={car.img} alt="car" />
            <ul>
                <li>{car.make}</li>
                <li>{car.model}</li>
                <li>{car.year}</li>
            </ul>
            <span>{car.rentalPrise}</span>
            <ul>
                <li>{address.sity}</li>
                <li>{address.country}</li>
                <li>{car.rentalCompany}</li>

            </ul>

        </>
    )
};
export default CarList;
