/*
 * @Author: Nizars
 * @Date: 2018-06-05 23:28:08
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-05 23:28:08
 */


function Safe(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {

  const originalMethod = descriptor.value;

  descriptor.value = function () {
    try {
      originalMethod.apply(this, arguments);
    } catch (ex) {
      console.error(ex);
    }
  };

  return descriptor;
}
export  default Safe;
