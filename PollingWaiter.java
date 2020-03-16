package example;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.ec2.AmazonEC2;
import com.amazonaws.services.ec2.model.AssociateDhcpOptionsRequest;
import com.amazonaws.services.ec2.model.AssociateVpcCidrBlockRequest;
import com.amazonaws.services.ec2.model.ClassicLinkInstance;
import com.amazonaws.services.ec2.model.CreateVpcRequest;
import com.amazonaws.services.ec2.model.CreateVpcResult;
import com.amazonaws.services.ec2.model.DeleteDhcpOptionsRequest;
import com.amazonaws.services.ec2.model.DeleteNetworkAclRequest;
import com.amazonaws.services.ec2.model.DeleteNetworkInterfaceRequest;
import com.amazonaws.services.ec2.model.DeleteRouteRequest;
import com.amazonaws.services.ec2.model.DeleteRouteTableRequest;
import com.amazonaws.services.ec2.model.DeleteSecurityGroupRequest;
import com.amazonaws.services.ec2.model.DeleteSubnetRequest;
import com.amazonaws.services.ec2.model.DeleteVpcPeeringConnectionRequest;
import com.amazonaws.services.ec2.model.DeleteVpcRequest;
import com.amazonaws.services.ec2.model.DescribeClassicLinkInstancesRequest;
import com.amazonaws.services.ec2.model.DescribeInstancesRequest;
import com.amazonaws.services.ec2.model.DescribeInternetGatewaysRequest;
import com.amazonaws.services.ec2.model.DescribeRouteTablesRequest;
import com.amazonaws.services.ec2.model.DescribeRouteTablesResult;
import com.amazonaws.services.ec2.model.DescribeSecurityGroupsRequest;
import com.amazonaws.services.ec2.model.DescribeSubnetsRequest;
import com.amazonaws.services.ec2.model.DescribeVpcsRequest;
import com.amazonaws.services.ec2.model.DescribeVpcsResult;
import com.amazonaws.services.ec2.model.DetachClassicLinkVpcRequest;
import com.amazonaws.services.ec2.model.DetachInternetGatewayRequest;
import com.amazonaws.services.ec2.model.DetachNetworkInterfaceRequest;
import com.amazonaws.services.ec2.model.DhcpOptions;
import com.amazonaws.services.ec2.model.DisassociateRouteTableRequest;
import com.amazonaws.services.ec2.model.Filter;
import com.amazonaws.services.ec2.model.Instance;
import com.amazonaws.services.ec2.model.InternetGateway;
import com.amazonaws.services.ec2.model.InternetGatewayAttachment;
import com.amazonaws.services.ec2.model.NetworkAcl;
import com.amazonaws.services.ec2.model.NetworkInterface;
import com.amazonaws.services.ec2.model.Reservation;
import com.amazonaws.services.ec2.model.RevokeSecurityGroupEgressRequest;
import com.amazonaws.services.ec2.model.RevokeSecurityGroupIngressRequest;
import com.amazonaws.services.ec2.model.Route;
import com.amazonaws.services.ec2.model.RouteTable;
import com.amazonaws.services.ec2.model.RouteTableAssociation;
import com.amazonaws.services.ec2.model.SecurityGroup;
import com.amazonaws.services.ec2.model.Subnet;
import com.amazonaws.services.ec2.model.TerminateInstancesRequest;
import com.amazonaws.services.ec2.model.Vpc;
import com.amazonaws.services.ec2.model.VpcPeeringConnection;
import com.google.common.base.Throwables;
import com.google.common.collect.Lists;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.Duration;
import java.util.List;

public class PollingToVectors {
    static private Logger log = LoggerFactory.getLogger(VpcHelper.class);

    private Ec2Context cxt;

    // Needs waiter
    private void waitForTermination(AmazonEC2 ec2, List<Instance> terminatedInstances) {
        long expirationTime = System.currentTimeMillis() + Duration.ofMinutes(1).toMillis();
        for(Instance instance: terminatedInstances) {
            while(System.currentTimeMillis() < expirationTime && ! instance.getState().getName().equals("terminated")) {
                log.info("waiting for " + instance.getInstanceId() + " " + instance.getState().getName());
                cxt.getClock().sleep(1000);
                instance = ec2.describeInstances(
                    new DescribeInstancesRequest().withInstanceIds(instance.getInstanceId()))
                    .getReservations().get(0).getInstances().get(0);
            }
        }
    }

    // No sleep
    private void waitForTermination(AmazonEC2 ec2, List<Instance> terminatedInstances) {
        long expirationTime = System.currentTimeMillis() + Duration.ofMinutes(1).toMillis();
        for(Instance instance: terminatedInstances) {
            while(System.currentTimeMillis() < expirationTime && ! instance.getState().getName().equals("terminated")) {
                log.info("waiting for " + instance.getInstanceId() + " " + instance.getState().getName());
                instance = ec2.describeInstances(
                        new DescribeInstancesRequest().withInstanceIds(instance.getInstanceId()))
                        .getReservations().get(0).getInstances().get(0);
            }
        }
    }

    // No loop
    private void waitForTermination(AmazonEC2 ec2, List<Instance> terminatedInstances) {
        ec2.describeInstances(
                new DescribeInstancesRequest().withInstanceIds(instance.getInstanceId()))
                .getReservations().get(0).getInstances().get(0);
        cxt.getClock().sleep(1000);
    }
}
