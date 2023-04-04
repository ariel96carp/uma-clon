import VaccineFAQ from './VaccineFAQ'
import CustomForm from '../../common/CustomForm'
import Benefits from './Benefits'

const Vaccines = () => (
    <>
        <CustomForm type="vaccine" />
        <Benefits />
        <VaccineFAQ />
    </>
)

export default Vaccines
