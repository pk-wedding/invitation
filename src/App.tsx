import React from 'react';
import './App.scss';
import {ConfigProvider, Button} from "antd";
import {Form} from "./components/Form/Form";
import {ReactComponent as Color1} from "./icons/color1.svg";
import {ReactComponent as Color2} from "./icons/color2.svg";
import {ReactComponent as Color3} from "./icons/color3.svg";
import {ReactComponent as Color4} from "./icons/color4.svg";
import {ReactComponent as Color5} from "./icons/color5.svg";
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {WhatsAppOutlined, PhoneOutlined} from "@ant-design/icons"
import {useMediaQuery} from 'react-responsive'
import {motion} from "framer-motion"

const tg = {token: "6233181523:AAGQSUAdLYIbgS8w5iJTAWh_ZfneMxs0g-k", chat_id: -978489665};

const allGuests = {
    "z9v2s3": ["Алёна", "Артём"],
    "rs2b4x": ["Аня"],
    "q2a8js": ["Маша", "Серёжа", "Даша", "Вика"],
    "uqgovj": ["Юля", "Альберт"],
    "1ji6uf": ["Наташа", "Ваня"],
    "7ydr2q": ["Маша", "Кирилл"],
    "af5681": ["Настя", "Миша"],
    "vucc44": ["Ксюша", "Андрей"],
    "rhyfrv": ["Вова"],
    "g4qkrd": ["Виталя"],
    "wjvcfm": ["Лёша"],
    "n8w6vh": ["Мама"],
    "s9wkk1": ["Папа"],
    "ha74yo": ["Мама", "Папа"]
}


const getGuestId = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);

    return urlSearchParams.get("guestId");
}

const getGuest = () => {
    const guestId = getGuestId()
    //@ts-ignore
    return (guestId && allGuests[guestId]) || ["Дорогой гость"]

}

const animationProps = {
    initial: {opacity: 0},
    whileInView: {opacity: 1},
    transition: {duration: 0.5}
}

const getDateViewBox = (isLaptop: boolean, isTablet: boolean, isLargeMobile: boolean) => {
    if (isLargeMobile) {
        return 500;
    }
    if (isTablet) {
        return 600
    }
    if (isLaptop) {
        return 700;
    }
    return 960;
}

function App() {
    const [guests, setGuests] = React.useState<string[]>(getGuest());
    const [guestId] = React.useState<string | null>(getGuestId());
    const ref = React.useRef<HTMLDivElement | null>(null)
    const [forms, setForms] = React.useState({});
    const [submitted, setSubmitted] = React.useState(false);
    const [activeColor, setActiveColor] = React.useState<number>(0);
    const sliderRef = React.useRef<Carousel>(null);
    const isLaptop = useMediaQuery({query: "(max-width: 1199px)"});
    const isTablet = useMediaQuery({query: "(max-width: 768px)"});
    const isLargeMobile = useMediaQuery({query: "(max-width: 425px)"});
    const viewBox = getDateViewBox(isLaptop, isTablet, isLargeMobile);
    const isAlone = guests.length === 1;

    React.useEffect(() => {
        //@ts-ignore
        particleground(document.querySelector(".block.first"),{dotColor:"rgba(255,255,255,0.2)",lineColor:"rgba(255,255,255,0.2)"})
    },[])

    const getDifferentText = (alone: string, multiple: string) => {
        return isAlone ? alone : multiple;
    }

    const handleSetColor = (index: number) => () => {
        setActiveColor(index);
    }

    const handleFormChange = (guestName: string, formValue: any) => {
        setForms(({...forms, guestId, [guestName]: formValue}))

    }
    const handleSubmit = () => {
        fetch(`https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${JSON.stringify(forms)}`).then(() => setSubmitted(true))
    }
    return (
        <div ref={ref}>
            <ConfigProvider
                theme={{components: {Radio: {colorPrimary: "#563C77"}, Checkbox: {colorPrimary: "#563C77"}}}}>
                <div>
                    <motion.div className={"block first"} style={{width: "100%"}} {...animationProps}>
                        <div className={"greetings"}>
                            <div className={"smallLine"}/>
                            <div className={"bigLine"}/>
                            <div className={"smallLine right"}/>
                            <div className={"bigLine right"}/>
                            <div className={'text'}>
                                <div
                                    className={"name"}>{guests.length > 1 ? `${guests.slice(0, -1).join(", ")} и ${guests.slice(-1)}` : guests[0]}</div>
                                <div className={"caption"}>Мы рады пригласить {getDifferentText("тебя", "вас")} на
                                    празднование<br/> долгожданного и
                                    радостного
                                    события – <br/>
                                    дня нашей свадьбы
                                </div>
                                <div className={"caption2"}>И будем счастливы разделить
                                    с {getDifferentText("тобой", "вами")}, {getDifferentText("одним из самых", "самыми")}<br/> {getDifferentText("близких", "близкими")} для
                                    нас{" "}
                                    {getDifferentText("людей", "людьми")}, этот светлый и<br/>
                                    замечательный день
                                </div>
                                <div className={"signature"}>С любовью, Паша и Кристина</div>
                            </div>
                        </div>
                        <div className={"question"}>{getDifferentText("Ты готов", "Вы готовы")} погрузиться в наш
                            мир?
                        </div>
                        <motion.div style={{y: 0}} className={"arrow"} animate={{y: [0, 10, 0]}}
                                    transition={{repeatType: "loop", repeat: Infinity, duration: 1}}>
                            <svg width="45" height="35" viewBox="0 0 45 35" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_31_2)">
                                    <path
                                        d="M37.2148 7H34.2014C33.9965 7 33.8036 7.10045 33.6831 7.26518L22.2684 22.9991L10.8536 7.26518C10.7331 7.10045 10.5402 7 10.3353 7H7.32194C7.06078 7 6.9081 7.29732 7.06078 7.51027L21.2277 27.0411C21.742 27.7482 22.7947 27.7482 23.305 27.0411L37.4719 7.51027C37.6286 7.29732 37.476 7 37.2148 7Z"
                                        fill="#563C77"/>
                                </g>
                                <defs>
                                    <filter id="filter0_d_31_2" x="0" y="0" width="44.5352" height="34.5714"
                                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                       result="hardAlpha"/>
                                        <feOffset/>
                                        <feGaussianBlur stdDeviation="3.5"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix"
                                                       values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                                 result="effect1_dropShadow_31_2"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_2"
                                                 result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                        </motion.div>
                    </motion.div>
                    <motion.div className={"block second"} {...animationProps}>
                        <div className={"wedding-date"}>
                            <svg viewBox={`0 0 ${viewBox} 220`}>
                                <symbol id="s-text">
                                    <text textAnchor="middle" x="50%" y="80%">17.06.2023</text>
                                </symbol>

                                <g className="g-ants">
                                    <use href="#s-text" className="text-copy"></use>
                                    <use href="#s-text" className="text-copy"></use>
                                    <use href="#s-text" className="text-copy"></use>
                                    <use href="#s-text" className="text-copy"></use>
                                    <use href="#s-text" className="text-copy"></use>
                                </g>
                            </svg>
                        </div>
                        <div className={"guide"}>
                            <div className={"guide-info"}>
                                <div className={"section-caption guide-info-caption"}
                                     data-text={"Как добраться?"}>Как
                                    добраться?
                                </div>
                                <div className={"guide-info-text"}>
                                    <div><b>Отель Тенет</b></div>
                                    <div>Самый центр Екатеринбурга</div>
                                    <br/>
                                    <div>ул. Хохрякова 1а</div>
                                    <div>Вход со стороны улицы проспект Ленина</div>
                                    <div>Банкетный зал на 9 этаже</div>
                                </div>
                            </div>
                            <div className={"guide-map"}>
                                <iframe
                                    title={"map"}
                                    src="https://yandex.ru/map-widget/v1/?ll=60.591703%2C56.836685&mode=search&oid=1732563459&ol=biz&sll=60.597465%2C56.838011&sspn=0.479279%2C0.152613&text=%D0%A2%D0%B5%D0%BD%D0%B5%D1%82&z=14"
                                    width="100%" height="100%" frameBorder={"none"} allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className={"block third"} {...animationProps}>
                        <div className={"section-caption day-program-caption"}>Программа дня</div>
                        <div className={"day-program"}>
                            <div className={"day-part"}>
                                <div className={"day-part-date"}>15:30</div>
                                <div className={"day-part-image"}>
                                    <img width={100} src={"./champagne.png"}/>
                                    <div className={"day-part-separator"}/>
                                </div>
                                <div>
                                    <div className={"day-part-caption"}>Фуршет</div>
                                    <div style={{width: 285}}>Новые знакомства и интересные беседы</div>
                                </div>
                            </div>
                            <div className={"day-part"}>
                                <div className={"day-part-date"}>16:00</div>
                                <div className={"day-part-image"}>
                                    <img width={100} src={"./rings.png"}/>
                                    <div className={"day-part-separator"}/>
                                </div>
                                <div>
                                    <div className={"day-part-caption"}>Выездная церемония</div>
                                    <div style={{width: 285}}>Осторожно, очень трогательно</div>
                                </div>
                            </div>
                            <div className={"day-part"}>
                                <div className={"day-part-date"}>17:00</div>
                                <div className={"day-part-image"}>
                                    <img width={100} src={"./balloons.png"}/>
                                    <div className={"day-part-separator"}/>
                                </div>
                                <div>
                                    <div className={"day-part-caption"}>Праздничный ужин</div>
                                    <div style={{width: 285}}>Время вкусной еды, танцев и развлечений</div>
                                </div>
                            </div>
                            <div className={"day-part"}>
                                <div className={"day-part-date"}>23:00</div>
                                <div className={"day-part-image"}>
                                    <img width={100} src={"./cake.png"}/>
                                </div>
                                <div>
                                    <div className={"day-part-caption"}>Окончание мероприятия</div>
                                    <div style={{width: 285}}>К сожалению, даже такой прекрасный день может
                                        закончиться
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className={"block fourth"} {...animationProps}>
                        <div className={"section-caption dress-code-caption"}>Dress code</div>
                        <div className={"dress-code-text"}>Мы будем очень благодарны,
                            если {getDifferentText("ты поддержишь", "вы поддержите")} цветовую
                            палитру<br/> нашей свадьбы в {getDifferentText("своем наряде", "ваших нарядах")}
                        </div>
                        <div className={"dress-code-content"}>
                            <div className={"dress-code-colors"}>
                                <Color1 onClick={handleSetColor(0)}
                                        className={`dress-code-color ${activeColor === 0 ? "active" : undefined}`}/>
                                <Color2 onClick={handleSetColor(1)}
                                        className={`dress-code-color ${activeColor === 1 ? "active" : undefined}`}/>
                                <Color3 onClick={handleSetColor(2)}
                                        className={`dress-code-color2 ${activeColor === 2 ? "active" : undefined}`}/>
                                <Color4 onClick={handleSetColor(3)}
                                        className={`dress-code-color ${activeColor === 3 ? "active" : undefined}`}/>
                                <Color5 onClick={handleSetColor(4)}
                                        className={`dress-code-color ${activeColor === 4 ? "active" : undefined}`}/>
                            </div>
                            <div className={"dress-code-image"}>
                                <Carousel selectedItem={activeColor} ref={sliderRef} width={"100%"} infiniteLoop
                                          showArrows={false}
                                          showIndicators={false}
                                          showStatus={false}
                                          showThumbs={false} swipeable={false}>
                                    <img
                                        src={"./example1.webp"}/>

                                    <img
                                        src={"./example2.webp"}/>

                                    <img
                                        src={"./example3.webp"}/>

                                    <img
                                        src={"./example4.webp"}/>

                                    <img
                                        src={"./example5.webp"}/>
                                </Carousel>

                            </div>
                        </div>
                    </motion.div>

                    <motion.div className={"block fifth"} {...animationProps}>
                        <div className={"section-caption dress-code-caption"}>Организация свадьбы</div>
                        <div className={"section-subtext dress-code-text"}>Наши организаторы с радостью помогут в
                            различных вопросах,
                            будь
                            то поиск входа в банкетный
                            зал
                            или подготовка сюрприза
                        </div>
                        <div className={"organizers"}>
                            <div className={"smallLine"}/>
                            <div className={"bigLine"}/>
                            <div className={"smallLine right"}/>
                            <div className={"bigLine right"}/>
                            {[{name: "inna", phone: "+79126335096"}, {
                                name: "elena",
                                phone: "+79995680516"
                            }].map((organizer) => <div className={"organizer"} key={organizer.name}>
                                <div><img src={`./${organizer.name}.png`} alt="" unselectable={"on"}
                                          draggable={"false"}/>
                                </div>
                                <div
                                    className={"organizer-name"}>{organizer.name === "inna" ? "Инна" : "Елена"}</div>
                                <div className={"organizer-contacts"}>
                                    <a style={{color: "inherit", textDecoration: "none"}}
                                       href={`tel:${organizer.phone}`}>
                                        <div><PhoneOutlined className={"contact-icon"}/>
                                            <div>Позвонить<br/> по телефону</div>
                                        </div>
                                    </a><a style={{color: "inherit", textDecoration: "none"}}
                                           href={`https://wa.me/${organizer.phone}`} target={"_blank"}>
                                    <div><WhatsAppOutlined className={"contact-icon"}/>
                                        <div>Написать<br/> в WhatsApp</div>
                                    </div>
                                </a>
                                </div>
                            </div>)}
                        </div>
                    </motion.div>
                    <motion.div className={"block sixth"} {...animationProps}>
                        <div className={"section-caption dress-code-caption"}>Ответ на приглашение</div>
                        <div className={"section-subtext form-deadLine"}>
                            Мы просим подтвердить свое присутствие на торжестве и ответить на<br/> несколько
                            вопросов,
                            которые
                            помогут нам при организации свадьбы<br/><br/>

                            Мы будем ждать ответ до 27.05.2023<br/>
                            ♡
                        </div>
                        <div className={"guest-forms"}>
                            {guests.map(guest => <Form guestName={guest}
                                                       setForm={(_, v) => handleFormChange(guest, v)}/>)}
                        </div>
                        <div className={"submit-form"}>
                            <Button size={"large"} onClick={handleSubmit}>Отправить</Button>
                            <div className={"submit-caption"} style={{opacity: submitted ? 1 : 0}}>Ответы успешно
                                отправлены<br/> Спасибо!
                            </div>
                        </div>
                        <div className={"footer"}>Мы будем счастливы видеть {getDifferentText("тебя", "вас")}!</div>
                    </motion.div>
                </div>
            </ConfigProvider>
        </div>
    );
}

export default App
;
