package com.erpo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.erpo.model.DoctorInfo;

@Repository
public interface DoctorInfoRepository extends CrudRepository<DoctorInfo,Long> {

}
