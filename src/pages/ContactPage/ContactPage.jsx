import ContactsForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container } from './ContactPage.styled';

const ContactPage = () => {
  return (
    <Container>
      <section>
        <ContactsForm />
      </section>
      <section>
        <Filter />
      </section>
      <section>
        <ContactList />
      </section>
    </Container>
  );
};

export default ContactPage;
