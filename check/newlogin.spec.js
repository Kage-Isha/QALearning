import {test}from '@playwright/test';
import { LoginPage } from '../pageObject/login.po';
const testdata=require('../fixtures/loginFixtures.json');
test.beforeEach(async ({page})=>{
    await page.goto('/');
})
test.describe('Valid login tests',()=>{
    test('Login using valid username and password',async({page})=>{
        const login=new LoginPage(page);
        await login.login(testdata.validUser.username,testdata.validUser.password);
        await login.verifyValidLogin();
    });
    test('Login using invalid username and password',async({page})=>{
        const login=new LoginPage(page);
        await login.login(testdata.invalidUser.username,testdata.invalidUser.password);
        await login.verifyInvalidLogin();
    });
    // test('Login using no username and password',async({page})=>{
    //     const login=new LoginPage(page);
    //     await login.login();
    //     await login.verifyInvalidLogin();
    // });
})