import Button from "../files/Button";
import Input from "../files/Input";




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