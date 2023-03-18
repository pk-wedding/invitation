import React from "react";
import "./Form.css"
import {Space, Radio, Form as AntdForm, Checkbox, Input,} from "antd"

type Props = { guestName: string, setForm: (_: any, form: any) => void };
export const Form = ({guestName, setForm}: Props) => {
    return <AntdForm name={guestName} onValuesChange={setForm}>
        <div className={"form"}>
            <div className={"form-name-block"}>
                <div className={"form-name-guest"}>{guestName}</div>
            </div>
            <div className={"form-content"}>
                <div className={"form-block"}>
                    <div className={"form-block-caption"}>Присутствие</div>
                    <AntdForm.Item name={"ready"}>
                        <Radio.Group>
                            <Space direction={"vertical"}>
                                <Radio value={"yes"}>Я приду</Radio>
                                <Radio value={"no"}>Не смогу прийти</Radio>
                            </Space>
                        </Radio.Group>
                    </AntdForm.Item>
                </div>
                <div className={"form-block"}>
                    <div className={"form-block-caption"}>Предпочтения по<br/> алкогольным напиткам</div>
                    <AntdForm.Item name={"alcoholDrinks"}>
                        <Checkbox.Group>
                            <Space direction={"vertical"}>
                                <Checkbox value={"white-wine"}>Вино белое</Checkbox>
                                <Checkbox value={"red-wine"}>Вино красное</Checkbox>
                                <Checkbox value={"cognac"}>Коньяк</Checkbox>
                                <Checkbox value={"whiskey"}>Виски</Checkbox>
                                <Checkbox value={"no"}>Не пью алкоголь</Checkbox>
                            </Space>
                        </Checkbox.Group>
                    </AntdForm.Item>
                    <AntdForm.Item name={"alcoholDrinks-other"}>
                        <div className={"form-other"}>
                            <div>Другое</div>
                            <div className={"other-input"}><Input bordered={false}/></div>
                        </div>
                    </AntdForm.Item>
                </div>
                <div className={"form-block"}>
                    <div className={"form-block-caption"}>Предпочтения по<br/> безалкогольным напиткам</div>
                    <AntdForm.Item name={"drinks"}>
                        <Checkbox.Group>
                            <Space direction={"vertical"}>
                                <Checkbox value={"juice"}>Сок фруктовый/ягодный</Checkbox>
                                <Checkbox value={"soda"}>Газированные напитки</Checkbox>
                                <Checkbox value={"juiceDrink"}>Морс</Checkbox>
                                <Checkbox value={"water"}>Вода</Checkbox>
                            </Space>
                        </Checkbox.Group>
                    </AntdForm.Item>
                    <AntdForm.Item name={"drinks-other"}>
                        <div className={"form-other"}>
                            <div>Другое</div>
                            <div className={"other-input"}><Input bordered={false}/></div>
                        </div>
                    </AntdForm.Item>
                </div>
                <div className={"form-block"}>
                    <div className={"form-block-caption"}>Предпочтения по горячему</div>
                    <AntdForm.Item name={"hotFood"}>
                        <Checkbox.Group>
                            <Space direction={"vertical"}>
                                <Checkbox value={"meat"}>Мясо</Checkbox>
                                <Checkbox value={"chicken"}>Курица</Checkbox>
                                <Checkbox value={"fish"}>Рыба</Checkbox>
                                <Checkbox value={"vegetables"}>Овощи</Checkbox>
                            </Space>
                        </Checkbox.Group>
                    </AntdForm.Item>
                    <AntdForm.Item name={"hotFood-other"}>
                        <div className={"form-other"}>
                            <div>Другое</div>
                            <div className={"other-input"}><Input bordered={false}/></div>
                        </div>
                    </AntdForm.Item>
                </div>
                <div className={"form-block"}>
                    <div className={"form-block-caption comment"}>Комментарий</div>
                    <div className={"comment-text"}>Ты можешь оставить любой комментарий<br/> для нас</div>
                    <AntdForm.Item name={"comment"}>
                        <Input.TextArea style={{resize: "none"}} placeholder={"Комментарий"}/>
                    </AntdForm.Item>
                </div>
            </div>
        </div>
    </AntdForm>
}