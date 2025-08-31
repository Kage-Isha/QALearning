import {test}from '@playwright/test';
import { LoginPage } from '../pageObject/login.po';
import { ContactPage } from '../pageObject/contact.po';
import { access } from 'fs';
import {authenticateUser,createEntity,deleteEntity,getEntity,validateEntity} from'./helper.spec';
const testdata=require('../fixtures/loginFixtures.json');
const contacttestdata=require('../fixtures/contactFixtures.json');
test.beforeEach(async ({page})=>{
    const login=new LoginPage(page);
    await page.goto('/');
    await login.login(testdata.validUser.username,testdata.validUser.password);
    await login.verifyValidLogin();
// Um. Kaila Glass-u. Only English. (Music)
// Um. Hand-la Glass-u. Glass-la Scotch-u
// Eyes-u Full-ah Tear-u
// Empty Life-u. Girl-u Come-u
// Life-u Reverse-u Gear-u
// Ah. Love-u Love-u. Oh My Love-u
// You Showed-u Me Bow-u
// Cow-u Cow-u. Holy Cow-u
// I Want You Hear Now-u
// God-u I am Dying Now-u
// She Is Happy How-u
// This-u Song-u For Soup Boys-u
// We Dont Have Choice-u
})
test.describe('Contact testcase',()=>{
    test.only('contact add test',async({page,request})=>{
        const contact=new ContactPage(page);
        await contact.contactAdd(contacttestdata.contact.firstName,contacttestdata.contact.lastName,contacttestdata.contact.dateOfBirth,contacttestdata.contact.email,contacttestdata.contact.phone,contacttestdata.contact.address,contacttestdata.contact.city,contacttestdata.contact.state,contacttestdata.contact.postal,contacttestdata.contact.country);
        await contact.viewContact();
        await contact.validContactCreated(contacttestdata.contact.firstName,contacttestdata.contact.lastName,contacttestdata.contact.dateOfBirth,contacttestdata.contact.email,contacttestdata.contact.phone,contacttestdata.contact.address,contacttestdata.contact.city,contacttestdata.contact.state,contacttestdata.contact.postal,contacttestdata.contact.country);
        const accessToken =await authenticateUser(testdata.validUser.username,testdata.validUser.password,{request});
        const id =await getEntity(accessToken,'/contacts','200',{request});
        await deleteEntity(accessToken,`/contacts/${id}`,{request});
        await validateEntity(accessToken,`/contacts/${id}`,'404',{request});
    });
    // test('contact edit test',async({page,request})=>{
    //     const contact=new ContactPage(page);
    //     await contact.contactAdd(contacttestdata.contact.firstName,contacttestdata.contact.lastName,contacttestdata.contact.dateOfBirth,contacttestdata.contact.email,contacttestdata.contact.phone,contacttestdata.contact.address,contacttestdata.contact.city,contacttestdata.contact.state,contacttestdata.contact.postal,contacttestdata.contact.country);
    //     await contact.contactAdd(contacttestdata.contact.firstName,contacttestdata.contact.lastName,contacttestdata.contact.dateOfBirth,contacttestdata.contact.email,contacttestdata.contact.phone,contacttestdata.contact.address,contacttestdata.contact.city,contacttestdata.contact.state,contacttestdata.contact.postal,contacttestdata.contact.country);
    //     await contact.viewContact();
    //     await contact.validContactCreated(contacttestdata.contact.firstName,contacttestdata.contact.lastName,contacttestdata.contact.dateOfBirth,contacttestdata.contact.email,contacttestdata.contact.phone,contacttestdata.contact.address,contacttestdata.contact.city,contacttestdata.contact.state,contacttestdata.contact.postal,contacttestdata.contact.country);
    //     await contact.contactEdit(contacttestdata.contact1.firstName,contacttestdata.contact1.lastName,contacttestdata.contact1.dateOfBirth,contacttestdata.contact1.email,contacttestdata.contact1.phone,contacttestdata.contact1.address,contacttestdata.contact1.city,contacttestdata.contact1.state,contacttestdata.contact1.postal,contacttestdata.contact1.country);
    //     await contact.viewContact();
    //     await contact.validContactCreated(contacttestdata.contact1.firstName,contacttestdata.contact1.lastName,contacttestdata.contact1.dateOfBirth,contacttestdata.contact1.email,contacttestdata.contact1.phone,contacttestdata.contact1.address,contacttestdata.contact1.city,contacttestdata.contact1.state,contacttestdata.contact1.postal,contacttestdata.contact1.country);
    // });
    // test('contact delete test',async({page,request})=>{
    //     const Data={
    //     "firstName":"Jhon1",
    //     "lastName":"deo1",
    //     "birthdate":"1900-09-09",
    //     "email":"sdfsd@sd.cdm",
    //     "phone":"9876543457",
    //     "street1":"fghjk1",
    //     "city":"zxgh1",
    //     "stateProvince":"",
    //     "postalCode":"12361",
    //     "country":"fgh1"
    // };
    // const contact= new ContactPage(page);
    // const accessToken= await authenticateUser(testdata.validUser.username,testdata.validUser.password,{request});
    // await createEntity(Data,accessToken,'/contacts',{request});
    // page.reload();
    // await contact.viewContact();
    // const id=await getEntity(accessToken,'/contacts','200',{request});
    // await contact.contactDelete();
    // await validateEntity(accessToken,`/contacts/${id}`,'400',{request});

    // // await contact.validContactCreated(contacttestdata.contactEdit.firstName,Data.lastName,Data.birthdate,Data.email,Data.phone,Data.street1,Data.city,Data.stateProvince,Data.postalCode,Data.country);
    // });
    // test.afterEach(async({page})=>{
    //     await page.close();
    // test('contact delete test',async({page,request})=>{
    //     const Data={
    //     "firstName":"Jhon1",
    //     "lastName":"deo1",
    //     "birthdate":"1900-09-09",
    //     "email":"sdfsd@sd.cdm",
    //     "phone":"9876543457",
    //     "street1":"fghjk1",
    //     "city":"zxgh1",
    //     "stateProvince":"",
    //     "postalCode":"12361",
    //     "country":"fgh1"
    // };
    // const contact= new ContactPage(page);
    // const accessToken= await authenticateUser(testdata.validUser.username,testdata.validUser.password,{request});
    // await createEntity(Data,accessToken,'/contacts',{request});
    // page.reload();
    // await contact.viewContact();
    // const id=await getEntity(accessToken,'/contacts','200',{request});
    // await contact.contactDelete();
    // await validateEntity(accessToken,`/contacts/${id}`,'400',{request});

    // // await contact.validContactCreated(contacttestdata.contactEdit.firstName,Data.lastName,Data.birthdate,Data.email,Data.phone,Data.street1,Data.city,Data.stateProvince,Data.postalCode,Data.country);
    // });
    // test.afterEach(async({page})=>{
    //     await page.close();
    // })
    // test('contact edit test',async({page,request})=>{
    //     const Data={
    //     "firstName":"Jhon1",
    //     "lastName":"deo1",
    //     "birthdate":"1900-09-09",
    //     "email":"sdfsd@sd.cdm",
    //     "phone":"9876543457",
    //     "street1":"fghjk1",
    //     "city":"zxgh1",
    //     "stateProvinxe":"",
    //     "postalCode":"12361",
    //     "country":"fgh1"
    // };
    // const contact= new ContactPage(page);
    // const accessToken= await authenticateUser(testdata.validUser.username,testdata.validUser.password,{request});
    // await createEntity(Data,accessToken,'/contacts',{request});
    // page.reload();
    // await contact.viewContact();
    // await contact.contactEdit(contacttestdata.contactEdit.firstName);
    // await contact.validContactCreated(contacttestdata.contactEdit.firstName,Data.lastName,Data.birthdate,Data.email,Data.phone,Data.street1,Data.city,Data.stateProvinxe,Data.postalCode,Data.country);
    // });
})