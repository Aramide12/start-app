import Button from "../components/Button";
import Input from "../components/Input";




export default function Contactus() {
    return (
    <section className="m-auto w-1/2">
        <form>
            <ul>
                <Input type='text' place='your message' userid='user'/>
                <Input type='email' place='your email' userid='eml'/>
            </ul>
            <Button status='Contact us'/>
        </form>
    </section>
    )
}