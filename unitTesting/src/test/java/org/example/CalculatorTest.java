package org.example;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
public class CalculatorTest{
    Calculator c;
    @BeforeEach
    public void setup(){
        c=new Calculator();
        System.out.println("Object Created");
    }
    @AfterEach
    public void tearDown(){
        c=null;
        System.out.println("Destroyed");
    }
    @Disabled
    public  void addTest(){
        System.out.println("Add Test Executed");
        assertEquals(10,c.add(5,5));

    }
    @Test
    public  void subTest(){
        System.out.println("sub test executed");
        assertEquals(7,c.subtract(10,3));
    }
}
