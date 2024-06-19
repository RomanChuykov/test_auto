
import {Foto,NameCar,NameCarLi,Descr,DescrLi} from './CarList.styled';
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
            <Foto src={car.img} alt={car.make} />
            <NameCar>
                <NameCarLi>{car.make}</NameCarLi>
                <NameCarLi>{car.model},</NameCarLi>
                <NameCarLi>{car.year}</NameCarLi>
            </NameCar>
            <span>{car.rentalPriсe}</span>
            <Descr>
                <DescrLi>{address.sity}</DescrLi>
                <DescrLi>{address.country}</DescrLi>
                <DescrLi>{car.rentalCompany}</DescrLi>
                <DescrLi>{car.type}</DescrLi>
                <DescrLi>{car.functionalities[0]}</DescrLi>
                <DescrLi>{car.id}</DescrLi>

            </Descr>

        </>
    )
};
export default CarList;
