import {ColumnsType} from "antd/es/table";
import {Table} from "antd";
import {useState} from "react";
import {Sex, User} from "../types";

/** Current template demonstrates how you can define a react component by the velocity parameter properties.
 * To see the result of the processed template try to drag and drop it from React palette (Templates -> Table) to {@link TableTestComponent} div element.
 * For more information follow https://youtrack.haulmont.com/issue/RCB-467/Table-template-support
 **/
export const TableTemplate = () => {

    const columns: ColumnsType<"/*vtl $table.itemType*/"> = [
        /*vtl #foreach($property in $table.columnProperties)*/
        {
            title: "/*vtl ${sQuote}$property.title${sQuote}*/",
            dataIndex: "/*vtl ${sQuote}$property.name${sQuote}*/",
            key: "/*vtl ${sQuote}$property.name${sQuote}*/",
            /*vtl #if($property.filtration == "true")*/
            /*vtl #if($property.dataType == "string")*/
            /*vtl filters: ${table.itemsVariableName}.map((item) => ({
                text: item.${property.name},
                value: item.${property.name}
            })),
            onFilter: (value, record) => record.${property.name}.includes(value as string),*/
            /*vtl #elseif($property.dataType == "boolean")*/
            /*vtl filters: [
                {
                    text: "true",
                    value: "true"
                },
                {
                    text: "false",
                    value: "false"
                }
            ],
            onFilter: (value, record) => String(record.${property.name}) == value,*/
            /*vtl #elseif($property.dataType == "number")*/
            /*vtl filters: ${table.itemsVariableName}.map((item) => ({
                text: item.${property.name},
                value: item.${property.name}
            })),
            onFilter: (value, record) => record.${property.name} == value,*/
            /*vtl #elseif($property.dataType == "object")*/

            /*vtl #end*/
            /*vtl #if($property.filterSearch == "true")*/
            /*vtl filterSearch: true,*/
            /*vtl #end*/
            /*vtl #end*/
            /*vtl #if($property.sorting == "true")*/
            /*vtl #if($property.dataType == "string")*/
            /*vtl sorter: (a, b) => (a.${property.name} > b.${property.name} ? -1 : 1),*/
            /*vtl #elseif($property.dataType == "boolean")*/
            /*vtl sorter: (a, b) => (Number(a.${property.name}) - Number(b.${property.name})),*/
            /*vtl #elseif($property.dataType == "number")*/
            /*vtl sorter: (a, b) => a.${property.name} - b.${property.name},*/
            /*vtl #elseif($property.dataType == "object")*/

            /*vtl #end*/

            /*vtl #end*/
            /*vtl #if($property.fixedColumn != "false")*/
            /*vtl fixed: $property.fixedColumn,*/
            /*vtl #end*/
        },
        /*vtl #end*/
    ];

    return <Table /*vtl #if($table.hierarchyProperty != "")expandable={{
                    childrenColumnName: "${table.hierarchyProperty}"
                }}#end columns={columns} dataSource={$table.itemsVariableName}*/></Table>
};

const TableTestComponent = () => {

  const [data, setData] = useState<User[] | undefined>([
    {
      id: 1,
      firstName: "Andrey",
      lastName: "Ivanov",
      age: 27,
      email: "a.ivanov@gmail.com",
      isAlive: true,
      sex: Sex.MAN
    },
    {
      id: 2,
      firstName: "Petr",
      lastName: "Petrov",
      age: 46,
      email: "p.petrov@gmail.com",
      isAlive: true,
      sex: Sex.MAN
    },
    {
      id: 3,
      firstName: "Anna",
      lastName: "Petrova",
      age: 40,
      email: "a.petrova@gmail.com",
      isAlive: true,
      sex: Sex.WOMAN
    }
  ]);

  return (
    <div>
      {/*DROP HERE!*/}
    </div>
  );
};
