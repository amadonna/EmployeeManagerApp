package io.boloprojects.firstangular.service;

import io.boloprojects.firstangular.exceptions.UserNotFoundException;
import io.boloprojects.firstangular.model.Employee;
import io.boloprojects.firstangular.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private EmployeeRepository repository;

    @Autowired
    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public Employee findById(Long id) {
        return repository.findById(id).orElseThrow(() ->
                new UserNotFoundException("User with id " + id + "was not found"));
    }
    public Employee addEmployee(Employee e) {
        e.setECode(UUID.randomUUID().toString());
        return repository.save(e);
    }
    public List<Employee> getEmployees() {
        return repository.findAllByOrderById();
    }
    public Employee updateEmployee(Employee e) { return repository.save(e);}
    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}
