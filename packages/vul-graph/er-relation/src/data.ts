/*
 * @Author: sfy
 * @Date: 2023-04-22 16:49:32
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-22 16:51:51
 * @FilePath: /vultures-vue/packages/vul-graph/er-relation/src/data.ts
 * @Description: update here
 */
export const dataTransform = () => {
  const nodes = [
    {
      id: 'info',
      label: 'Employee',
      attrs: [
        {
          key: 'id',
          type: 'number(6)'
        },
        {
          key: 'key',
          type: 'varchar(255)'
        },
        {
          key: 'gender',
          type: 'enum(M, F)'
        },
        {
          key: 'birthday',
          type: 'date'
        },
        {
          key: 'hometown',
          type: 'varchar(255)'
        },
        {
          key: 'country',
          type: 'varchar(255)'
        },
        {
          key: 'nation',
          type: 'varchar(255)'
        },
        {
          key: 'jobId',
          type: 'number(3)',
        },
        {
          key: 'phone',
          type: 'varchar(255)'
        },
        {
          key: 'deptId',
          type: 'number(6)',
        },
        {
          key: 'startTime',
          type: 'date',
        },
        {
          key: 'leaveTime',
          type: 'date'
        }
      ]
    },
    {
      id: 'dept',
      label: 'Department',
      attrs: [
        {
          key: 'id',
          type: 'number(6)'
        },
        {
          key: 'title',
          type: 'varchar(255)'
        },
        {
          key: 'desc',
          type: 'text'
        },
        {
          key: 'parent',
          type: 'number(6)',

        },
        {
          key: 'manager',
          type: 'number(6)'
        }
      ]
    },
    {
      id: 'emp',
      label: 'samtest',
      attrs: [
        {
          key: 'id',
          type: 'number(6)'
        },
        {
          key: 'say',
          type: 'varchar(255)'
        },
        {
          key: 'task',
          type: 'text'
        },
        {
          key: 'eat',
          type: 'number(6)',

        },
        {
          key: 'read',
          type: 'number(6)'
        }
      ]
    }
  ]
  const edges = [
    {
      "source": "info",
      "target": "dept",
      "sourceKey": "jobId",
      "targetKey": "id",
      "label": "1:N"
    },
    {
      "source": "info",
      "target": "dept",
      "sourceKey": "deptId",
      "targetKey": "manager",
      "label": "1:N"
    },
    {
      "source": "info",
      "target": "dept",
      "sourceKey": "startTime",
      "targetKey": "id",
      "label": "1:N"
    },
    {
      "source": "dept",
      "target": "info",
      "sourceKey": "parent",
      "targetKey": "id",
      "label": "1:N"
    },
    {
      "source": "emp",
      "target": "info",
      "sourceKey": "say",
      "targetKey": "id",
      "label": "1:N"
    }
  ]



  return {
    nodes,
    edges
  }
}