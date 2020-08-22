package com.erpo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.erpo.model.Appointment;

@Repository
public interface AppointmentRepository extends CrudRepository<Appointment, Long> {

}