import { motion } from 'framer-motion';

const Contact = () => {
return (
    <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.h1
        className="text-4xl font-bold text-center text-blue-700 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        >
        RushCart
        </motion.h1>

        <motion.h2
        className="text-xl text-center text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        >
        Calidad y velocidad en cada entrega.
        </motion.h2>

        <motion.p
        className="text-gray-700 text-lg leading-7 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        >
        En RushCart somos una importadora dedicada a brindar productos de excelencia en tiempo récord. Nos especializamos en tecnología, hogar y accesorios, ofreciendo un catálogo en constante renovación pensado para los usuarios modernos que valoran tanto la calidad como la agilidad.
        </motion.p>

        <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        >
        {[
        { title: 'Calidad', text: 'Seleccionamos cada producto cuidadosamente para garantizar el mejor rendimiento y durabilidad.' },
        { title: 'Velocidad', text: 'Priorizamos la logística para que tus pedidos lleguen lo antes posible, sin demoras.' },
        { title: 'Compromiso', text: 'Tu satisfacción es nuestra prioridad. Ofrecemos soporte y atención personalizada.' }
        ].map((item, idx) => (
            <motion.div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-6 border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * idx }}
            >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
            </motion.div>
        ))}
        </motion.div>
    </div>
    );
};

export default Contact;
