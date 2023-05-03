import {Form, Input, InputNumber, Space} from "antd/es";
import Button from "antd/es/button";
import TextArea from "antd/es/input/TextArea";
import {Checkbox, DatePicker, Radio, Select, TimePicker} from "antd";


/** Current template demonstrates how you can define a react component by the velocity parameter properties.
 * To see the result of the processed template try to drag and drop it from React palette (Templates -> Form) to {@link FormTestComponent} div element.
 * For more information follow https://youtrack.haulmont.com/issue/RCB-475/Form-app-template-support
 **/
export const FormTemplate = (
    /** @caption Title **/title: string,
    /** @caption Layout **/formLayout: 'horizontal' | 'vertical'
) => {

    const [form] = Form.useForm/*vtl <$form.typeName>*/();

    return (
        <Form
            form={form}
            title={title}
            layout={formLayout}
            className="narrow-layout"
        >
            {/*vtl #foreach($field in $form.fields)*/}
            <Form.Item
                /*vtl #if("$!field.label" != "")label="$field.label"$newline#end*/
                /*vtl #if("$!field.name" != "")name="$field.name"$newline#end*/
                /*vtl #if($field.required)rules={[{ required: true }]}$newline#end*/>
                {/*vtl #if($field.controlType == "Input")*/}
                <Input /*vtl #if("$!field.placeholder" != "")placeholder="$field.placeholder"#end*//>
                {/*vtl #elseif($field.controlType == "InputNumber")*/}
                <InputNumber /*vtl #if("$!field.placeholder" != "")placeholder="$field.placeholder"#end*//>
                {/*vtl #elseif($field.controlType == "InputPassword")*/}
                <Input.Password /*vtl #if("$!field.placeholder" != "")placeholder="$field.placeholder"#end*//>
                {/*vtl #elseif($field.controlType == "TextArea")*/}
                <TextArea /*vtl #if("$!field.placeholder" != "")placeholder="$field.placeholder"#end*//>
                {/*vtl #elseif($field.controlType == "Select")*/}
                <Select>
                    <Select.Option>Demo</Select.Option>
                </Select>
                {/*vtl #elseif($field.controlType == "RadioGroup")*/}
                <Radio.Group>
                    <Radio.Button></Radio.Button>
                </Radio.Group>
                {/*vtl #elseif($field.controlType == "Checkbox")*/}
                <Checkbox/>
                {/*vtl #elseif($field.controlType == "DatePicker")*/}
                <DatePicker/>
                {/*vtl #elseif($field.controlType == "DateTimePicker")*/}
                <DatePicker/>
                <TimePicker/>
                {/*vtl #end*/}
            </Form.Item>
            {/*vtl #end*/}
            <Form.Item>
                <Space>
                    {/*vtl #foreach($action in $form.actions) */}
                    <Button /*vtl #if($action.actionType == "submit")htmlType={'$action.actionType'}#end*/>{/*vtl #if("$!action.label" != "")$action.label#end*/}</Button>
                    {/*vtl #end*/}
                </Space>
            </Form.Item>
        </Form>
    );
}

const FormTestComponent = () => {

  return (
    <div>
      {/*DROP HERE!*/}
    </div>
  );
};