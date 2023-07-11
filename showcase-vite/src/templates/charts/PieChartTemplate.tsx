import {MayHaveLabel, ResponsivePie} from "@nivo/pie";
import {Sex, User} from "../../types";
import {useEffect, useState} from "react";

/** Current template demonstrates how you can define a react component by the velocity parameter properties.
 * To see the result of the processed template try to drag and drop it from React palette (Templates -> Charts -> Pie) to {@link PieChartTest} Fragment element.
 * For more information follow https://youtrack.haulmont.com/issue/RCB-863/Amplicode-charts-wizard
 **/
export const PieChartTemplate = () => {

  const [pieData, setPieData] = useState<MayHaveLabel[]>([]);
  /*vtl #if($pie.itemsVariableName)*/
  useEffect(() => {
    /*vtl const mappedData = ${pie.itemsVariableName}.map( item => {
        return {
            id: item.${pie.id.name},
            label: item.${pie.label.name},
            value: item.${pie.value.name}
        }
    })
    setPieData(mappedData)*/
  }, ["/*vtl ${pie.itemsVariableName}*/"]);
  /*vtl #end*/

  return (
    <div style={{
      height: 400,
      margin: '0 auto',
      padding: 30,
      width: 500,
    }}>
      <ResponsivePie
        data={pieData}
        margin={{top: 40, right: 80, bottom: 80, left: 80}}
      />
    </div>
  );
};

export const PieChartTest = () => {
  const users: User[] = [
    {
      id: 1,
      firstName: "Petr",
      lastName: "Petrov",
      age: 23,
      email: "p.petrov@gmail.com",
      isAlive: true,
      profession: "Middle Software Developer",
      sex: Sex.MAN,
      salary: 130000
    },
    {
      id: 2,
      firstName: "Ivan",
      lastName: "Ivanov",
      age: 46,
      email: "i.ivanov@gmail.com",
      isAlive: true,
      profession: "Manager",
      sex: Sex.MAN,
      salary: 250000
    },
    {
      id: 3,
      firstName: "Elena",
      lastName: "Nikolaevna",
      age: 40,
      email: "e.nikolaevna@gmail.com",
      isAlive: true,
      profession: "Senior Software Developer",
      sex: Sex.WOMAN,
      salary: 200000
    }
  ];

  const [pieData, setPieData] = useState<MayHaveLabel[]>([]);

  useEffect(() => {
    const mappedData = users.map(item => {
      return {
        id: item.profession,
        label: item.firstName,
        value: item.salary
      }
    })
    setPieData(mappedData)
  }, [users]);

  return (
    <>
      <div style={{
        height: 400,
        margin: '0 auto',
        padding: 30,
        width: 500,
      }}>
        <ResponsivePie
          data={pieData}
          margin={{top: 40, right: 80, bottom: 80, left: 80}}
        />
      </div>
    </>
  );
};
