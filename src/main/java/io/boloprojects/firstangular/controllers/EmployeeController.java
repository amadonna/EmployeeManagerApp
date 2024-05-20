package io.boloprojects.firstangular.controllers;

import io.boloprojects.firstangular.model.Employee;
import io.boloprojects.firstangular.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService service;

    @GetMapping("/all")
    public ResponseEntity<List<Employee>> employees() {
        List<Employee> list = service.getEmployees();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long id) {
        Employee employee = service.findById(id);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        Employee e = service.addEmployee(employee);
        return new ResponseEntity<>(e, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee) {
        Employee e = service.updateEmployee(employee);
        return new ResponseEntity<>(e, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
        service.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
