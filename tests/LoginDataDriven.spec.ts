import{test,expect}from'@playwright/test';
import{LoginPage}from'../pages/LoginPage';
import{TestConfig}from'../test.config';
import{HomePage}from'../pages/HomePage';
import{DataProvider}from'../utils/DataProvider';

const jsonPath = './testData/loginData.json';
const jsonTestData = DataProvider.getTestDataFromCsv(jsonPath);