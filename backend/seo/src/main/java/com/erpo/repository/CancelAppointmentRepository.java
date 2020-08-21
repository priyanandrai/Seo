package com.erpo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.erpo.model.CancelAppointment;

@Repository
public interface CancelAppointmentRepository extends CrudRepository<CancelAppointment,Long> {

}
